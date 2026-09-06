import { AppShell } from '@/components/layout/AppShell';
import { ProjectView } from '@/components/project/ProjectView';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell>
      <ProjectView projectId={id} />
    </AppShell>
  );
}
