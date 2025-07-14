import { GoogleGenAI } from '@google/genai'
import { env } from '../env.ts'

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
})

const model = "gemini-2.5-flash"

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
      text: 'Transcreva o audio para português brasileiro. Seja preciso e natural na transcrição. Mantenha a pontuação adequada e divida o texto em parágrafos quando for necessário.',
    },
    {
      inlineData: {
        mimeType,
        data: audioAsBase64,
      },
    }
  ],
  })

  if (!response.text) {
    throw new Error('Failed to transcribe audio')
  }

  return response.text
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [
      {
        text,
      },
    ],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT',
    },
  })

  if (!response.embeddings?.[0].values) {
    throw new Error('Failed to generate embeddings')
  }

  return response.embeddings[0].values
}

export async function generateAnswer(question: string, transcriptions: string[]) {
  const context = transcriptions.join('\n\n')

  const prompt = `
Com base no contexto fornecido, responda à pergunta de forma clara e precisa em português brasileiro.

Contexto:
${context}

Pergunta:
${question}

Instruções:
- Use apenas informações contidas no contexto enviado;
- Se a resposta não for encontrada no contexto, apenas responda que não possui informações suficientes pra responder;
- Seja objetivo;
  `.trim()

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  })

  if (!response.text) {
    throw new Error('Failed to generate answer')
  }

  return response.text
}