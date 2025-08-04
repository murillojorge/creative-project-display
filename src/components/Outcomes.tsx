import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Target, 
  Palette, 
  Smartphone, 
  Shield,
  CheckCircle,
  Award,
  BarChart3,
  Zap
} from 'lucide-react';

interface OutcomesProps {
  content: string;
}

const categorizeOutcome = (outcome: string) => {
  const text = outcome.toLowerCase();
  
  // User Experience category
  if (text.includes('activation') || text.includes('sign-up') || text.includes('satisfaction') || text.includes('nps')) {
    return 'userExperience';
  }
  
  // Technical Excellence category
  if (text.includes('design system') || text.includes('responsive') || text.includes('usability') || 
      text.includes('wcag') || text.includes('compliance') || text.includes('accessibility')) {
    return 'technicalExcellence';
  }
  
  // Business Impact category (fallback for other metrics)
  return 'businessImpact';
};

const parseMetricValue = (outcome: string) => {
  const percentMatch = outcome.match(/(\d+)%/);
  const multiplyMatch = outcome.match(/(\d+)x/);
  const npsMatch = outcome.match(/(\d+) to (\d+)/);
  
  if (percentMatch) return { value: percentMatch[1] + '%', description: outcome.replace(percentMatch[0], '').trim() };
  if (multiplyMatch) return { value: multiplyMatch[1] + 'x', description: outcome.replace(multiplyMatch[0], '').trim() };
  if (npsMatch) return { value: `+${parseInt(npsMatch[2]) - parseInt(npsMatch[1])}`, description: outcome };
  
  return { value: '✓', description: outcome };
};

const categoryConfig = {
  userExperience: {
    title: 'User Experience',
    icon: Heart,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/20',
    borderColor: 'border-red-200 dark:border-red-800',
    badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  },
  technicalExcellence: {
    title: 'Technical Excellence',
    icon: Shield,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
  },
  businessImpact: {
    title: 'Business Impact',
    icon: BarChart3,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    borderColor: 'border-green-200 dark:border-green-800',
    badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  }
};

const MetricCard = ({ metric, config }: { metric: any, config: any }) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border">
      <div className={`mt-1 ${config.color}`}>
        <CheckCircle size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-lg font-bold ${config.color}`}>
            {metric.value}
          </span>
          <Badge variant="secondary" className={`text-xs ${config.badgeColor} border-0`}>
            Achievement
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {metric.description}
        </p>
      </div>
    </div>
  );
};

const CategorySection = ({ category, outcomes, config }: { category: string, outcomes: any[], config: any }) => {
  const Icon = config.icon;
  
  return (
    <Card className={`${config.borderColor} ${config.bgColor} animate-fade-in`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-background/80 ${config.color}`}>
            <Icon size={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">{config.title}</h4>
            <p className="text-sm text-muted-foreground font-normal">
              {outcomes.length} key {outcomes.length === 1 ? 'achievement' : 'achievements'}
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {outcomes.map((metric, index) => (
          <MetricCard key={index} metric={metric} config={config} />
        ))}
      </CardContent>
    </Card>
  );
};

const Outcomes: React.FC<OutcomesProps> = ({ content }) => {
  if (!content) return null;
  
  const outcomes = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (outcomes.length === 0) {
    return null;
  }

  // Group outcomes by category
  const categorizedOutcomes = outcomes.reduce((acc, outcome) => {
    const category = categorizeOutcome(outcome);
    const metric = parseMetricValue(outcome);
    
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(metric);
    
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Impact Categories</h3>
        <p className="text-sm text-muted-foreground">
          Our comprehensive results organized by impact area
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(categorizedOutcomes).map(([category, outcomes]) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          return (
            <CategorySection
              key={category}
              category={category}
              outcomes={outcomes}
              config={config}
            />
          );
        })}
      </div>
      
      {/* Summary stats */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="text-primary" size={16} />
            <span className="font-medium text-sm">Project Overview</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {outcomes.length} Total Achievements
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Measurable impact delivered across user experience, technical implementation, and business outcomes.
        </p>
      </div>
    </div>
  );
};

export default Outcomes;