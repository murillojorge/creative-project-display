import { chatbotAdaptiveCardsProject } from './chatbot-adaptive-cards';
import { aiCloudResearchRedesignProject } from './ai-cloud-research-redesign';
import { cryptoIntegrationsProject } from './crypto-integrations';
import { digitalGoodsForGoodProject } from './digital-goods-for-good';
import { intercompanyTransactionsProject } from './intercompany-transactions';
import { polcoAccessibilityAuditProject } from './polco-accessibility-audit';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  process: string;
  results: string;
  technologies: string[];
  gallery: string[];
}

export const projects: Project[] = [
  chatbotAdaptiveCardsProject,
  aiCloudResearchRedesignProject,
  cryptoIntegrationsProject,
  digitalGoodsForGoodProject,
  intercompanyTransactionsProject,
  polcoAccessibilityAuditProject
];