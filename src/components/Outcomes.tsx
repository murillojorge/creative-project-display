import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface OutcomesProps {
  content: string;
}

const getMetricContext = (outcome: string) => {
  const text = outcome.toLowerCase();
  
  if (text.includes('4x') && text.includes('activation')) {
    return {
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      context: 'User onboarding optimization',
      impact: 'Significantly improved user journey and reduced drop-off rates',
      metric: 'Growth rate that exceeded industry benchmarks by 300%'
    };
  }
  
  if (text.includes('21x') && text.includes('sign-up')) {
    return {
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      context: 'Conversion funnel optimization',
      impact: 'Dramatically streamlined registration process',
      metric: 'Exceptional conversion rate improvement through UX redesign'
    };
  }
  
  if (text.includes('88%') && text.includes('satisfaction')) {
    return {
      icon: Heart,
      color: 'text-red-500 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      context: 'Customer experience enhancement',
      impact: 'High user satisfaction indicates strong product-market fit',
      metric: 'Score places product in top tier of customer satisfaction'
    };
  }
  
  if (text.includes('nps') && text.includes('50')) {
    return {
      icon: Target,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      context: 'Brand loyalty transformation',
      impact: 'Moved from poor to excellent NPS category',
      metric: '44-point improvement represents exceptional customer advocacy'
    };
  }
  
  if (text.includes('90%') && text.includes('design system')) {
    return {
      icon: Palette,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      context: 'Design consistency achievement',
      impact: 'Unified user experience across all touchpoints',
      metric: 'High adoption rate demonstrates effective design governance'
    };
  }
  
  if (text.includes('100%') && text.includes('usability')) {
    return {
      icon: Smartphone,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      context: 'Mobile-first responsive design',
      impact: 'Full accessibility across all device sizes',
      metric: 'Complete mobile optimization ensures universal access'
    };
  }
  
  if (text.includes('wcag') || text.includes('compliance')) {
    return {
      icon: Shield,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      context: 'Accessibility standards compliance',
      impact: 'Inclusive design for users with disabilities',
      metric: 'AA compliance ensures legal requirements and inclusive access'
    };
  }
  
  return {
    icon: CheckCircle,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    context: 'Project milestone',
    impact: 'Successful delivery of key objective',
    metric: 'Important achievement contributing to overall success'
  };
};

const parseDisplayMetric = (outcome: string) => {
  const percentMatch = outcome.match(/(\d+)%/);
  const multiplyMatch = outcome.match(/(\d+)x/);
  const npsMatch = outcome.match(/(\d+) to (\d+)/);
  
  if (percentMatch) {
    return {
      displayValue: percentMatch[1] + '%',
      fullText: outcome,
      shortDesc: outcome.replace(percentMatch[0], '').trim()
    };
  }
  
  if (multiplyMatch) {
    return {
      displayValue: multiplyMatch[1] + 'x',
      fullText: outcome,
      shortDesc: outcome.replace(multiplyMatch[0], '').trim()
    };
  }
  
  if (npsMatch) {
    const improvement = parseInt(npsMatch[2]) - parseInt(npsMatch[1]);
    return {
      displayValue: `+${improvement}`,
      fullText: outcome,
      shortDesc: 'NPS improvement'
    };
  }
  
  return {
    displayValue: '✓',
    fullText: outcome,
    shortDesc: outcome.length > 30 ? outcome.substring(0, 30) + '...' : outcome
  };
};

const InteractiveMetricCard = ({ outcome, index }: { outcome: string, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const metric = parseDisplayMetric(outcome);
  const context = getMetricContext(outcome);
  const Icon = context.icon;
  
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in ${
        isExpanded ? 'ring-2 ring-primary/20' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-4">
        {/* Compact View */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${context.bgColor}`}>
              <Icon size={16} className={context.color} />
            </div>
            <div>
              <div className={`text-2xl font-bold ${context.color}`}>
                {metric.displayValue}
              </div>
              <p className="text-xs text-muted-foreground">
                {metric.shortDesc}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Info size={14} className="text-muted-foreground" />
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
        
        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t space-y-3 animate-fade-in">
            <div>
              <h5 className="font-medium text-sm mb-1">{context.context}</h5>
              <p className="text-xs text-muted-foreground">
                {metric.fullText}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="text-xs">Impact</Badge>
                <p className="text-xs text-muted-foreground flex-1">
                  {context.impact}
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="text-xs">Context</Badge>
                <p className="text-xs text-muted-foreground flex-1">
                  {context.metric}
                </p>
              </div>
            </div>
            
            {/* Visual indicator */}
            <div className={`h-1 rounded-full ${context.bgColor} relative overflow-hidden`}>
              <div 
                className={`h-full ${context.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000`}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}
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

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Key Outcomes</h3>
        <p className="text-sm text-muted-foreground">
          Click any metric to explore detailed context and impact
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {outcomes.map((outcome, index) => (
          <InteractiveMetricCard
            key={index}
            outcome={outcome}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          💡 Tip: Click on any card to see why this metric matters
        </p>
      </div>
    </div>
  );
};

export default Outcomes;