import React from 'react';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Target, 
  Palette, 
  Smartphone, 
  Shield,
  CheckCircle
} from 'lucide-react';

interface OutcomesProps {
  content: string;
}

const getIconAndColor = (outcome: string) => {
  const text = outcome.toLowerCase();
  
  if (text.includes('increase') || text.includes('improvement')) {
    return { icon: TrendingUp, color: 'text-green-600 dark:text-green-400' };
  }
  if (text.includes('satisfaction') || text.includes('nps')) {
    return { icon: Heart, color: 'text-red-500 dark:text-red-400' };
  }
  if (text.includes('sign-up') || text.includes('activation')) {
    return { icon: Users, color: 'text-blue-600 dark:text-blue-400' };
  }
  if (text.includes('design system') || text.includes('ui components')) {
    return { icon: Palette, color: 'text-purple-600 dark:text-purple-400' };
  }
  if (text.includes('responsive') || text.includes('usability') || text.includes('screens')) {
    return { icon: Smartphone, color: 'text-orange-600 dark:text-orange-400' };
  }
  if (text.includes('compliance') || text.includes('wcag') || text.includes('accessibility')) {
    return { icon: Shield, color: 'text-indigo-600 dark:text-indigo-400' };
  }
  
  return { icon: CheckCircle, color: 'text-primary' };
};

const parseMetric = (outcome: string) => {
  // Handle percentage metrics
  const percentMatch = outcome.match(/(\d+)%/);
  if (percentMatch) {
    return {
      type: 'percentage',
      value: parseInt(percentMatch[1]),
      label: outcome,
      description: outcome.replace(percentMatch[0], '').trim()
    };
  }
  
  // Handle multiplier metrics (4x, 21x)
  const multiplyMatch = outcome.match(/(\d+)x/);
  if (multiplyMatch) {
    const multiplier = parseInt(multiplyMatch[1]);
    return {
      type: 'multiplier',
      value: Math.min((multiplier / 25) * 100, 100), // Scale for progress bar
      originalValue: multiplier,
      label: outcome,
      description: outcome.replace(multiplyMatch[0], '').trim()
    };
  }
  
  // Handle NPS improvement (from 6 to 50)
  const npsMatch = outcome.match(/(\d+) to (\d+)/);
  if (npsMatch) {
    const from = parseInt(npsMatch[1]);
    const to = parseInt(npsMatch[2]);
    return {
      type: 'beforeAfter',
      value: ((to - from) / 50) * 100, // Scale improvement
      fromValue: from,
      toValue: to,
      label: outcome,
      description: outcome.replace(/\d+ to \d+/, '').trim()
    };
  }
  
  // Handle WCAG compliance (100% implied)
  if (outcome.toLowerCase().includes('wcag') || outcome.toLowerCase().includes('compliance')) {
    return {
      type: 'percentage',
      value: 100,
      label: outcome,
      description: 'Full compliance achieved'
    };
  }
  
  return {
    type: 'basic',
    value: 100,
    label: outcome,
    description: outcome
  };
};

const MetricDisplay = ({ metric, index }: { metric: any, index: number }) => {
  const { icon: Icon, color } = getIconAndColor(metric.label);
  
  return (
    <div className="space-y-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-center gap-2">
        <Icon size={16} className={color} />
        <span className="text-sm font-medium">{metric.label}</span>
      </div>
      
      <div className="space-y-2">
        {metric.type === 'percentage' && (
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className={`font-semibold ${color}`}>{metric.value}%</span>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        )}
        
        {metric.type === 'multiplier' && (
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Growth Factor</span>
              <span className={`font-semibold ${color}`}>{metric.originalValue}x</span>
            </div>
            <Progress value={metric.value} className="h-2" />
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          </div>
        )}
        
        {metric.type === 'beforeAfter' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Improvement</span>
              <span className={`font-semibold ${color}`}>{metric.fromValue} → {metric.toValue}</span>
            </div>
            <div className="relative">
              <Progress value={metric.value} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Before: {metric.fromValue}</span>
                <span>After: {metric.toValue}</span>
              </div>
            </div>
          </div>
        )}
        
        {metric.type === 'basic' && (
          <div className="space-y-1">
            <Progress value={metric.value} className="h-2" />
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          </div>
        )}
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

  const metrics = outcomes.map(parseMetric);

  return (
    <div>
      <h3 className="font-medium mb-6">Key Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <MetricDisplay key={index} metric={metric} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Outcomes;