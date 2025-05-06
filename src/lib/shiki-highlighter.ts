import * as shiki from 'shiki';

let highlighterInstance: shiki.Highlighter | null = null;

/**
 * Initialize the Shiki highlighter with the specified theme
 */
export async function initHighlighter(theme: 'dark' | 'light' = 'dark'): Promise<shiki.Highlighter> {
  if (highlighterInstance) {
    return highlighterInstance;
  }

  // Use the VS Code Dark Plus theme for dark mode and GitHub Light theme for light mode
  const themeName = theme === 'dark' ? 'github-dark' : 'github-light';

  // Use createHighlighter with updated API options (themes instead of theme)
  highlighterInstance = await shiki.createHighlighter({
    themes: [themeName],
    langs: ['javascript', 'typescript', 'tsx', 'jsx', 'json', 'css', 'html', 'bash', 'markdown'],
  });

  // Add non-null assertion to satisfy the type checker
  return highlighterInstance!;
}

/**
 * Highlight code using Shiki
 */
export async function highlightCode(code: string, language: string, theme: 'dark' | 'light' = 'dark'): Promise<string> {
  const highlighter = await initHighlighter(theme);
  const themeName = theme === 'dark' ? 'github-dark' : 'github-light';
  
  try {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: themeName,
    });
  } catch (error) {
    console.error('Error highlighting code:', error);
    
    // Fallback to plaintext if the language isn't supported
    return highlighter.codeToHtml(code, { 
      lang: 'plaintext',
      theme: themeName,
    });
  }
}