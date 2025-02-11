
import { useProfile } from '@/lib/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { supabase } from '@/integrations/supabase/client'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { data: profile, isLoading } = useProfile()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/auth')
  }

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 space-y-8">
        <div className="flex items-center space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={profile?.avatar_url} />
            <AvatarFallback>{profile?.username?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{profile?.username}</h1>
            <Button variant="outline" className="mt-2" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Playlists</h2>
            <div className="bg-black/10 rounded-xl p-4">
              <p className="text-gray-400">No playlists yet</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recently Played</h2>
            <div className="bg-black/10 rounded-xl p-4">
              <p className="text-gray-400">No recent activity</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Favorite Artists</h2>
            <div className="bg-black/10 rounded-xl p-4">
              <p className="text-gray-400">No favorite artists yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
