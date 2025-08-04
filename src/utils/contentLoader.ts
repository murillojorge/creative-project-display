// Content loader utility for loading markdown content
export const loadProjectContent = async (projectSlug: string, section: string): Promise<string> => {
  try {
    const response = await fetch(`/content/${projectSlug}/${section}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${section} content for ${projectSlug}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading content:`, error);
    return `Content not available for ${section}`;
  }
};

export const loadAllProjectContent = async (projectSlug: string) => {
  const sections = ['challenge', 'solution', 'process', 'results', 'outcomes'];
  const content: Record<string, string> = {};
  
  await Promise.all(
    sections.map(async (section) => {
      content[section] = await loadProjectContent(projectSlug, section);
    })
  );
  
  return content;
};