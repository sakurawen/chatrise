interface ModelProvider {
  name: string
  icon?: React.ReactNode
  models: Model[]

}

/**
 * format: company: name desc
 */
interface Model {
  name: string
  desc?: string
}

export const modelProviders: ModelProvider[] = [
  {
    name: 'DeepSeek',
    models: [
      {
        name: 'DeepSeek Chat',
      },
      {
        name: 'DeepSeek Reasoner',
      },
    ],
  },
  {
    name: 'Mistral',
    models: [
      {
        name: 'Mistral Large',
      },
      {
        name: 'Mistral Small',
      },
      {
        name: 'Pixtral Large',
      },
      {
        name: 'Pixtral 12B',
      },
      {
        name: 'Codestral',
      },
    ],
  },
  {
    name: 'OpenRouter',
    models: [
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo(older v0613)',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 16K',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 16k(older v1106)',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo Instruct',
      },
      {
        name: 'OpenAI: ChatGPT-4',
      },
      {
        name: 'OpenAI: ChatGPT-4 (older v0314)',
      },
      {
        name: 'OpenAI: ChatGPT-4 32k',
      },
      {
        name: 'OpenAI: ChatGPT-4 32k (older v0314)',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo (older v1106)',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo Preview',
      },
      {
        name: 'OpenAI: ChatGPT-4.5 (Preview)',
      },
      {
        name: 'OpenAI: ChatGPT-4o',
      },
      {
        name: 'OpenAI: ChatGPT-4o Search Preview',
      },
      {
        name: 'OpenAI: ChatGPT-4o-mini',
      },
      {
        name: 'OpenAI: ChatGPT-4o-mini Search Preview',
      },
      {
        name: 'OpenAI: ChatGPT-o1',
      },
      {
        name: 'OpenAI: ChatGPT-o1-mini',
      },
      {
        name: 'OpenAI: ChatGPT-o1-preview',
      },
      {
        name: 'OpenAI: ChatGPT-o1-pro',
      },
      {
        name: 'OpenAI: ChatGPT-o1 Mini',
      },
      {
        name: 'OpenAI: ChatGPT-o1 Mini High',
      },
    ],
  },
];
