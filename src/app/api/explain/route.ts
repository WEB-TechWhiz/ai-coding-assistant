import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import dotenv from 'dotenv';
import { ExplainRequest } from '../../types';

dotenv.config();

const assistant = process.env.AI_ASSISTANT_KEY;

if (!assistant) {
  throw new Error("Gemini API key is not set in the .env file");
}

const genAI = new GoogleGenerativeAI(assistant);

export const POST = async (req: NextRequest) => {
  try {
    const { code }: ExplainRequest = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Please explain the following code in detail:\n\n${code}\n\nEXPLANATION:`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    return NextResponse.json({ data: { explanation } }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 });
  }
};
