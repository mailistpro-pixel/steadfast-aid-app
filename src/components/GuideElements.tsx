interface GuideStepProps {
  step?: number;
  children: React.ReactNode;
  critical?: boolean;
}

export function GuideStep({ step, children, critical = false }: GuideStepProps) {
  return (
    <div className={`guide-step ${critical ? 'border-l-warning' : ''}`}>
      {step && (
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          critical ? 'bg-warning text-warning-foreground' : 'bg-primary text-primary-foreground'
        }`}>
          {step}
        </span>
      )}
      <div className="flex-1 text-foreground">
        {children}
      </div>
    </div>
  );
}

interface WarningBoxProps {
  children: React.ReactNode;
}

export function WarningBox({ children }: WarningBoxProps) {
  return (
    <div className="warning-box">
      {children}
    </div>
  );
}

interface InfoBoxProps {
  children: React.ReactNode;
}

export function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="info-box">
      {children}
    </div>
  );
}

interface SafeBoxProps {
  children: React.ReactNode;
}

export function SafeBox({ children }: SafeBoxProps) {
  return (
    <div className="safe-box">
      {children}
    </div>
  );
}

interface DisclaimerProps {
  children?: React.ReactNode;
}

export function Disclaimer({ children }: DisclaimerProps) {
  return (
    <div className="disclaimer">
      {children || (
        <p>
          This application provides civilian survival guidance only. 
          It does not replace emergency services or medical professionals.
        </p>
      )}
    </div>
  );
}
