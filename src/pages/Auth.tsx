
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { Music } from 'lucide-react'

const Auth = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username,
            },
          },
        })
        if (error) throw error
        toast.success('Check your email to confirm your account')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })
        if (error) throw error
        navigate('/')
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-background">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="w-full max-w-md space-y-8 relative">
        {/* Logo and Title Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto animate-fade-in">
            <Music className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="text-muted-foreground">
            {isSignUp 
              ? 'Join AudioGrove to start your musical journey' 
              : 'Sign in to continue your musical journey'}
          </p>
        </div>

        {/* Auth Form */}
        <div className="glass-card p-8 rounded-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10" />
          <form className="space-y-6 relative" onSubmit={handleAuth}>
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                  placeholder="johndoe"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <Button
              type="submit"
              className="w-full relative overflow-hidden group transition-all duration-200 bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              <span className="relative z-10">
                {isLoading ? 'Loading...' : isSignUp ? 'Sign up' : 'Sign in'}
              </span>
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
            </Button>
          </form>
        </div>

        {/* Toggle Auth Mode */}
        <Button
          type="button"
          variant="ghost"
          className="w-full hover:bg-white/5 transition-colors"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp 
            ? 'Already have an account? Sign in' 
            : "Don't have an account? Sign up"}
        </Button>
      </div>
    </div>
  )
}

export default Auth
