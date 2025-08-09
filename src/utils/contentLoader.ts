// Content loader utility for loading markdown content and outcomes data
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

export const loadProjectOutcomes = async (projectSlug: string): Promise<any> => {
  try {
    // Try to load JSON outcomes first (new format)
    const jsonResponse = await fetch(`/content/${projectSlug}/outcomes.json`);
    if (jsonResponse.ok) {
      return await jsonResponse.json();
    }
    
    // Fallback to markdown format (old format)
    const mdResponse = await fetch(`/content/${projectSlug}/outcomes.md`);
    if (mdResponse.ok) {
      const text = await mdResponse.text();
      return { outcomes: text.split('\n').map(line => line.trim()).filter(line => line.length > 0) };
    }
    
    throw new Error(`Failed to load outcomes for ${projectSlug}`);
  } catch (error) {
    console.error(`Error loading outcomes:`, error);
    return { outcomes: [] };
  }
};

export const loadAllProjectContent = async (projectSlug: string) => {
  const sections = ['challenge', 'solution', 'process', 'results'];
  const content: Record<string, any> = {};
  
  // Load markdown sections
  await Promise.all(
    sections.map(async (section) => {
      content[section] = await loadProjectContent(projectSlug, section);
    })
  );
  
  // Load outcomes separately (could be JSON or markdown)
  content.outcomes = await loadProjectOutcomes(projectSlug);
  
  return content;
};