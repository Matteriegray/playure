import { Sidebar } from '@/components/layout/Sidebar';
import { RightPanel } from '@/components/layout/RightPanel';
import { MainFeed } from '@/components/feed/MainFeed';

const FeedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="ml-64 mr-80 min-h-screen">
        <div className="py-6 px-4">
          <MainFeed />
        </div>
      </div>

      <RightPanel />
    </div>
  );
};

export default FeedPage;