import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}
      <input
        className={cn('input', className)}
        {...props}
      />
      {error && (
        <p className="form-error">{error}</p>
      )}
    </div>
  )
}