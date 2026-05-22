 import { GoogleGenerativeAI } from '@google/generative-ai';
 import { NextRequest, NextResponse } from 'next/server';
 import dotenv from 'dotenv';
import {GenerateRequest} from "../../types/index" 
 dotenv.config();
 
 const assistant = process.env.AI_ASSISTANT_KEY;
 
 if (!assistant) {
   throw new Error("Gemini API key is not set in the .env file");
 }
 
 const genAI = new GoogleGenerativeAI(assistant);
 
 export const POST = async (req: NextRequest) => {
   try {
     const {description,Language}:GenerateRequest = await req.json();
 
     if (!description) {
       return NextResponse.json({ error: "ddescription is required" }, { status: 400 });
     }
 
     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
 
     const prompt = `Generate ${Language ||  "javascript"}code:\n\n${description}\n\n`;
     const result = await model.generateContent(prompt);
     const response = await result.response;
     const generatedCode = response.text();
 
     return NextResponse.json({ data: {generatedCode } }, { status: 200 });
   } catch (error) {
     console.error("Error:", error);
     return NextResponse.json({ error: "Failed to generate code" }, { status: 500 });
   }
 };
 