import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  Zap
} from 'lucide-react';

interface OutcomesProps {
  content: string;
}

const getIconAndColor = (outcome: string, index: number) => {
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
  if (text.includes('100%') || text.includes('compliance')) {
    return { icon: CheckCircle, color: 'text-emerald-600 dark:text-emerald-400' };
  }
  if (text.includes('award') || text.includes('success')) {
    return { icon: Award, color: 'text-yellow-600 dark:text-yellow-400' };
  }
  
  // Default fallback
  return { icon: Zap, color: 'text-primary' };
};

const extractMetric = (outcome: string) => {
  const percentMatch = outcome.match(/(\d+)%/);
  const multiplyMatch = outcome.match(/(\d+)x/);
  const numberMatch = outcome.match(/(\d+[\d,]*)/);
  
  if (percentMatch) return { metric: percentMatch[1] + '%', rest: outcome.replace(percentMatch[0], '').trim() };
  if (multiplyMatch) return { metric: multiplyMatch[1] + 'x', rest: outcome.replace(multiplyMatch[0], '').trim() };
  if (numberMatch) return { metric: numberMatch[1], rest: outcome.replace(numberMatch[0], '').trim() };
  
  return { metric: '', rest: outcome };
};

const Outcomes: React.FC<OutcomesProps> = ({ content }) => {
  if (!content) return null;
  
  // Split content into individual lines and filter out empty ones
  const outcomes = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (outcomes.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="font-medium mb-6">Key Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outcomes.map((outcome, index) => {
          const { icon: Icon, color } = getIconAndColor(outcome, index);
          const { metric, rest } = extractMetric(outcome);
          
          return (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 ${color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    {metric && (
                      <div className={`text-2xl font-bold ${color} mb-1`}>
                        {metric}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">
                      {rest || outcome}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Outcomes;