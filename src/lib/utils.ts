import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const services = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'End-to-end ML pipelines, model development, and intelligent automation solutions tailored for enterprise scale.',
    icon: 'Brain',
    color: 'indigo',
    features: ['Custom Model Development', 'MLOps & Deployment', 'AutoML Solutions', 'Model Optimization'],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Modern data architectures, lakehouse implementations, and real-time streaming pipelines for data-driven decisions.',
    icon: 'Database',
    color: 'cyan',
    features: ['Data Lake/Lakehouse', 'ETL/ELT Pipelines', 'Real-time Streaming', 'Data Governance'],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'LLM fine-tuning, RAG architectures, AI agents, and production-ready GenAI applications for your business.',
    icon: 'Sparkles',
    color: 'violet',
    features: ['LLM Fine-tuning', 'RAG Systems', 'AI Agents', 'Prompt Engineering'],
  },
  {
    id: 'cloud-mlops',
    title: 'Cloud & MLOps',
    description: 'Scalable cloud infrastructure, Kubernetes-native ML platforms, and CI/CD for reliable model deployment.',
    icon: 'Cloud',
    color: 'indigo',
    features: ['AWS/GCP/Azure', 'Kubernetes MLOps', 'Model Monitoring', 'Cost Optimization'],
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Business intelligence, predictive analytics, and decision intelligence to unlock actionable insights from your data.',
    icon: 'BarChart3',
    color: 'cyan',
    features: ['BI Dashboards', 'Predictive Modeling', 'Statistical Analysis', 'A/B Testing'],
  },
  {
    id: 'consulting',
    title: 'AI Strategy & Consulting',
    description: 'Data-driven roadmap creation, AI readiness assessment, and digital transformation strategy for enterprise leaders.',
    icon: 'Lightbulb',
    color: 'violet',
    features: ['AI Readiness Audit', 'Strategy Roadmap', 'Technology Selection', 'Change Management'],
  },
]

export const stats = [
  { value: '200+', label: 'Projects Delivered', suffix: '' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '50+', label: 'Enterprise Clients', suffix: '' },
  { value: '40+', label: 'AI Experts', suffix: '' },
]

export const industries = [
  { name: 'Financial Services', icon: 'TrendingUp', description: 'Fraud detection, risk modeling, algorithmic trading, and credit scoring.' },
  { name: 'Healthcare & Life Sciences', icon: 'Heart', description: 'Medical imaging AI, clinical NLP, drug discovery, and patient analytics.' },
  { name: 'Retail & E-commerce', icon: 'ShoppingCart', description: 'Recommendation engines, demand forecasting, and customer intelligence.' },
  { name: 'Manufacturing', icon: 'Factory', description: 'Predictive maintenance, quality control AI, and supply chain optimization.' },
  { name: 'Media & Entertainment', icon: 'Play', description: 'Content personalization, automated tagging, and audience intelligence.' },
  { name: 'Logistics & Supply Chain', icon: 'Truck', description: 'Route optimization, demand sensing, and intelligent warehouse automation.' },
]

export const testimonials = [
  {
    quote: "TensorNova's team delivered a production-grade ML platform that reduced our fraud detection time by 85%. Their engineering quality is exceptional.",
    author: 'Priya Sharma',
    role: 'Head of Data Science',
    company: 'Axis Bank',
    avatar: '/avatars/priya.jpg',
  },
  {
    quote: "The GenAI solution TensorNova built handles 10,000+ customer queries daily with 94% accuracy. It transformed our support operations completely.",
    author: 'Rajesh Kumar',
    role: 'VP Technology',
    company: 'Flipkart',
    avatar: '/avatars/rajesh.jpg',
  },
  {
    quote: "Their data engineering team built our entire lakehouse architecture in 8 weeks. The performance gains were beyond our expectations.",
    author: 'Anika Menon',
    role: 'Chief Data Officer',
    company: 'Apollo Hospitals',
    avatar: '/avatars/anika.jpg',
  },
]

export const caseStudies = [
  {
    id: 'fraud-detection',
    title: 'Real-time Fraud Detection for Leading Indian Bank',
    category: 'AI & Machine Learning',
    industry: 'Financial Services',
    results: ['85% reduction in fraud losses', '< 50ms inference latency', '$12M annual savings'],
    description: 'Built an ensemble ML model processing 2M+ transactions/day with real-time scoring and automated decisioning.',
    image: '/cases/fraud.jpg',
    tags: ['XGBoost', 'Kafka', 'AWS', 'Python'],
  },
  {
    id: 'medical-imaging',
    title: 'AI-Powered Medical Imaging Diagnosis Platform',
    category: 'Generative AI',
    industry: 'Healthcare',
    results: ['94% diagnostic accuracy', '10x faster analysis', '3 hospitals deployed'],
    description: 'Computer vision system for radiology report generation, reducing reporting time from 2 hours to 12 minutes.',
    image: '/cases/medical.jpg',
    tags: ['PyTorch', 'MONAI', 'GCP', 'DICOM'],
  },
  {
    id: 'recommendation-engine',
    title: 'Hyper-Personalized Recommendation Engine',
    category: 'Advanced Analytics',
    industry: 'E-commerce',
    results: ['32% increase in CTR', '18% revenue uplift', '50M+ users served'],
    description: 'Graph neural network-based recommendation system handling 50M+ users with sub-100ms latency.',
    image: '/cases/ecommerce.jpg',
    tags: ['PyG', 'Redis', 'Kubernetes', 'A/B Testing'],
  },
]

export const team = [
  {
    name: 'Arjun Nair',
    role: 'Founder & CEO',
    bio: 'Former ML Lead at Google DeepMind. 12 years building AI at scale.',
    linkedin: '#',
    twitter: '#',
    image: '/team/arjun.jpg',
  },
  {
    name: 'Sneha Iyer',
    role: 'Chief Data Scientist',
    bio: 'PhD, IIT Bombay. Published researcher in deep learning and NLP.',
    linkedin: '#',
    twitter: '#',
    image: '/team/sneha.jpg',
  },
  {
    name: 'Vikram Patel',
    role: 'Head of Engineering',
    bio: 'Ex-Amazon. Expert in distributed systems and MLOps at petabyte scale.',
    linkedin: '#',
    twitter: '#',
    image: '/team/vikram.jpg',
  },
  {
    name: 'Divya Reddy',
    role: 'VP Client Solutions',
    bio: 'Ex-McKinsey. Bridges AI technology with business transformation.',
    linkedin: '#',
    twitter: '#',
    image: '/team/divya.jpg',
  },
]

export const blogPosts = [
  {
    id: 'rag-production',
    title: 'Building Production-Grade RAG Systems: Lessons from 20+ Deployments',
    excerpt: 'A deep dive into chunking strategies, retrieval optimization, and evaluation frameworks for enterprise RAG.',
    category: 'Generative AI',
    readTime: '8 min read',
    date: 'Apr 12, 2026',
    image: '/blog/rag.jpg',
    author: { name: 'Sneha Iyer', avatar: '/team/sneha.jpg' },
  },
  {
    id: 'mlops-2026',
    title: 'MLOps in 2026: The Shift Towards Autonomous Model Management',
    excerpt: 'How platform engineering, AI-driven monitoring, and automated retraining are reshaping MLOps practices.',
    category: 'MLOps',
    readTime: '6 min read',
    date: 'Apr 5, 2026',
    image: '/blog/mlops.jpg',
    author: { name: 'Vikram Patel', avatar: '/team/vikram.jpg' },
  },
  {
    id: 'llm-fine-tuning',
    title: 'Fine-Tuning LLMs for Domain-Specific Tasks: A Practical Guide',
    excerpt: 'From LoRA to RLHF — choosing the right fine-tuning strategy for your enterprise use case.',
    category: 'LLMs',
    readTime: '10 min read',
    date: 'Mar 28, 2026',
    image: '/blog/llm.jpg',
    author: { name: 'Sneha Iyer', avatar: '/team/sneha.jpg' },
  },
]

export const openRoles = [
  { title: 'Senior ML Engineer', team: 'Engineering', location: 'Bengaluru / Remote', type: 'Full-time' },
  { title: 'LLM Research Engineer', team: 'Research', location: 'Bengaluru / Remote', type: 'Full-time' },
  { title: 'Data Engineer (Spark/Flink)', team: 'Engineering', location: 'Hyderabad / Remote', type: 'Full-time' },
  { title: 'MLOps Platform Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time' },
  { title: 'AI Consultant', team: 'Client Solutions', location: 'Mumbai / Delhi', type: 'Full-time' },
  { title: 'Frontend Engineer (React/Next.js)', team: 'Product', location: 'Remote', type: 'Full-time' },
]

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
]
