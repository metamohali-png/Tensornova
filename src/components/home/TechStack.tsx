'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const stacks = [
  {
    category: 'ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'JAX', 'scikit-learn', 'XGBoost'],
  },
  {
    category: 'LLMs & GenAI',
    items: ['OpenAI', 'Anthropic', 'Llama', 'Mistral', 'LangChain', 'LlamaIndex'],
  },
  {
    category: 'Data & Streaming',
    items: ['Spark', 'Flink', 'Kafka', 'Airflow', 'dbt', 'Snowflake', 'Databricks'],
  },
  {
    category: 'Cloud & MLOps',
    items: ['AWS SageMaker', 'GCP Vertex AI', 'Azure ML', 'Kubernetes', 'MLflow', 'Kubeflow'],
  },
  {
    category: 'Vector & Databases',
    items: ['Pinecone', 'Weaviate', 'pgvector', 'Redis', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Observability',
    items: ['Prometheus', 'Grafana', 'Datadog', 'Weights & Biases', 'Evidently'],
  },
]

export function TechStack() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology"
          title="Battle-tested tools, best-in-class expertise"
          description="We are framework-agnostic and deeply fluent across the modern AI/data stack. We choose the right tool for your use case — not the one that's trendy."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl glass-card hover:border-indigo-500/30 transition-colors"
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
                {stack.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
