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
  apiHost: string
  desc?: string
}

export const modelProviders: ModelProvider[] = [
  {
    name: 'DeepSeek',
    models: [
      {
        name: 'DeepSeek Chat',
        apiHost: 'https://api.deepseek.com/v1',
      },
      {
        name: 'DeepSeek Reasoner',
        apiHost: 'https://api.deepseek.com/v1',
      },
    ],
  },
  {
    name: 'Mistral',
    models: [
      {
        name: 'Mistral Large',
        apiHost: '',
      },
      {
        name: 'Mistral Small',
        apiHost: '',
      },
      {
        name: 'Pixtral Large',
        apiHost: '',
      },
      {
        name: 'Pixtral 12B',
        apiHost: '',
      },
      {
        name: 'Codestral',
        apiHost: '',
      },
    ],
  },
  {
    name: 'OpenRouter',
    models: [
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo(older v0613)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 16K',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 16k(older v1106)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-3.5 Turbo Instruct',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 (older v0314)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 32k',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 32k (older v0314)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo (older v1106)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4 Turbo Preview',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4.5 (Preview)',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4o',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4o Search Preview',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4o-mini',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-4o-mini Search Preview',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1-mini',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1-preview',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1-pro',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1 Mini',
        apiHost: '',
      },
      {
        name: 'OpenAI: ChatGPT-o1 Mini High',
        apiHost: '',
      },
    ],
  },
];
