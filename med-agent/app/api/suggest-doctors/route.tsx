import { openai } from "@/config/OpenAiModel";
import { doctors } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { notes } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "system",
          content: `You are a medical assistant AI. Based on the following list of doctors, 
          suggest the most relevant ones depending on user symptoms. 
          Return ONLY valid JSON, without any Markdown code fences or extra formatting. 
          Doctor list: ${JSON.stringify(doctors)}`
        },
        {
          role: "user",
          content: `User Notes/Symptoms: ${notes}. Depending on user notes and symptoms, suggest the most relevant doctors.`
        }
      ],
    });

    if (!completion.choices || completion.choices.length === 0) {
      return NextResponse.json(
        { success: false, error: "No choices returned from OpenAI API" },
        { status: 500 }
      );
    }

    const message = completion.choices[0].message?.content || "{}";

    let cleanedMessage = message
      .replace(/```json\n?/, '')
      .replace(/\n?```/, '')
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(cleanedMessage);
    } catch (e: any) {
      console.error('JSON Parse Error:', e.message, 'Raw:', cleanedMessage);
      parsed = { error: "Invalid JSON returned by model", raw: cleanedMessage };
    }

    return NextResponse.json(parsed);
  } catch (e: any) {
    console.error('API Route Error:', e.message);
    return NextResponse.json(
      { success: false, error: e.message || "Unknown error" },
      { status: 500 }
    );
  }
}