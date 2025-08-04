import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Target, 
  Palette, 
  Smartphone, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface OutcomesProps {
  content: string;
}

const getIconAndColor = (outcome: string) => {
  const text = outcome.toLowerCase();
  
  if (text.includes('increase') || text.includes('improvement')) {
    return { icon: TrendingUp, color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-100 dark:bg-green-900/20' };
  }
  if (text.includes('satisfaction') || text.includes('nps')) {
    return { icon: Heart, color: 'text-red-500 dark:text-red-400', bgColor: 'bg-red-100 dark:bg-red-900/20' };
  }
  if (text.includes('sign-up') || text.includes('activation')) {
    return { icon: Users, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900/20' };
  }
  if (text.includes('design system') || text.includes('ui components')) {
    return { icon: Palette, color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-100 dark:bg-purple-900/20' };
  }
  if (text.includes('responsive') || text.includes('usability') || text.includes('screens')) {
    return { icon: Smartphone, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900/20' };
  }
  if (text.includes('compliance') || text.includes('wcag') || text.includes('accessibility')) {
    return { icon: Shield, color: 'text-indigo-600 dark:text-indigo-400', bgColor: 'bg-indigo-100 dark:bg-indigo-900/20' };
  }
  
  return { icon: CheckCircle, color: 'text-primary', bgColor: 'bg-primary/10' };
};

const parseTimelineMetric = (outcome: string) => {
  // Handle multiplier metrics (4x, 21x)
  const multiplyMatch = outcome.match(/(\d+)x/);
  if (multiplyMatch) {
    const multiplier = parseInt(multiplyMatch[1]);
    const description = outcome.replace(multiplyMatch[0], '').trim();
    return {
      metric: `${multiplier}x`,
      title: `${multiplier}x Growth Achieved`,
      description: description,
      story: `We successfully scaled performance by ${multiplier} times`
    };
  }
  
  // Handle percentage metrics
  const percentMatch = outcome.match(/(\d+)%/);
  if (percentMatch) {
    const percent = parseInt(percentMatch[1]);
    const description = outcome.replace(percentMatch[0], '').trim();
    return {
      metric: `${percent}%`,
      title: `${percent}% Target Reached`,
      description: description,
      story: `Achieved ${percent}% completion rate`
    };
  }
  
  // Handle NPS improvement (from 6 to 50)
  const npsMatch = outcome.match(/(\d+) to (\d+)/);
  if (npsMatch) {
    const from = parseInt(npsMatch[1]);
    const to = parseInt(npsMatch[2]);
    const improvement = to - from;
    return {
      metric: `+${improvement}`,
      title: `NPS Score Transformation`,
      description: `Improved from ${from} to ${to}`,
      story: `Customer satisfaction dramatically increased by ${improvement} points`
    };
  }
  
  // Handle WCAG compliance
  if (outcome.toLowerCase().includes('wcag') || outcome.toLowerCase().includes('compliance')) {
    return {
      metric: '100%',
      title: 'Full Compliance Achieved',
      description: outcome,
      story: 'Successfully met all accessibility standards'
    };
  }
  
  return {
    metric: '✓',
    title: 'Milestone Completed',
    description: outcome,
    story: 'Successfully delivered this key outcome'
  };
};

const TimelineMilestone = ({ metric, index, isLast }: { metric: any, index: number, isLast: boolean }) => {
  const { icon: Icon, color, bgColor } = getIconAndColor(metric.description);
  
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
      )}
      
      {/* Milestone marker */}
      <div className="flex items-start gap-4">
        <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${bgColor} border-2 border-background shadow-sm`}>
          <Icon size={20} className={color} />
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-2xl font-bold ${color}`}>{metric.metric}</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <h4 className="font-semibold text-foreground">{metric.title}</h4>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{metric.story}</p>
          
          <div className="text-xs text-muted-foreground/80 bg-muted/30 rounded px-2 py-1 inline-block">
            {metric.description}
          </div>
        </div>
      </div>
    </div>
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

  const timelineMetrics = outcomes.map(parseTimelineMetric);

  return (
    <div>
      <div className="mb-8">
        <h3 className="font-medium mb-2">Success Journey</h3>
        <p className="text-sm text-muted-foreground">
          Our transformation story - key milestones achieved throughout the project
        </p>
      </div>
      
      <div className="space-y-0">
        {timelineMetrics.map((metric, index) => (
          <TimelineMilestone 
            key={index} 
            metric={metric} 
            index={index}
            isLast={index === timelineMetrics.length - 1}
          />
        ))}
      </div>
      
      {/* Success summary */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
        <div className="flex items-center gap-2 text-primary">
          <CheckCircle size={16} />
          <span className="font-medium text-sm">Project Success</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          All key objectives achieved with measurable impact across user experience, technical excellence, and business metrics.
        </p>
      </div>
    </div>
  );
};

export default Outcomes;