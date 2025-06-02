import React from 'react';
import { cn } from '@/lib/utils';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import FooterText from './FooterText';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleUsernameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Attempting to log in with:', { username, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log('Login action complete.');
    // In a real app, you would handle success/error (e.g., show toast, navigate)
    // setUsername(''); // Optionally clear fields after submission
    // setPassword('');
  }, [username, password]);

  const handleSignUpClick = React.useCallback(() => {
    console.log('Navigate to sign up page');
    // Navigation logic would go here, e.g., using react-router-dom
  }, []);

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "flex flex-col gap-4", // As per Layout Requirements: mainContent.container
        className
      )}
    >
      <h1 className="text-3xl font-bold text-card-foreground text-left">
        Log in
      </h1>
      
      <InputField
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        autoComplete="username"
        required
        aria-label="Username"
      />
      
      <InputField
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="current-password"
        required
        aria-label="Password"
      />
      
      <SubmitButton type="submit" disabled={isLoading || !username || !password}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </SubmitButton>
      
      <FooterText
        text="or, "
        linkText="sign up"
        onLinkClick={handleSignUpClick}
      />
    </form>
  );
};

export default LoginForm;
