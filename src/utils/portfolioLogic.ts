import type { Project, SkillCategory } from '../data/portfolioData';

/**
 * Filter projects by category and text search query
 */
export function filterProjects(
  projects: Project[],
  category: string,
  query: string = ''
): Project[] {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    // Category match: checks project.category, project.categories array, or semantic fallback
    const categoryMatch =
      category === 'all' ||
      project.category === category ||
      (Boolean(project.categories) && project.categories!.includes(category as any)) ||
      (category === 'modernization' &&
        (project.tags.some((tag) => /modern|migrat|strangler/i.test(tag)) ||
          project.description.toLowerCase().includes('moderniz') ||
          project.description.toLowerCase().includes('migrat')));
    if (!categoryMatch) return false;

    // Search query match
    if (!normalizedQuery) return true;

    const inTitle = project.title.toLowerCase().includes(normalizedQuery);
    const inSubtitle = project.subtitle.toLowerCase().includes(normalizedQuery);
    const inDesc = project.description.toLowerCase().includes(normalizedQuery);
    const inCompany = project.company.toLowerCase().includes(normalizedQuery);
    const inStack = project.techStack.some((tech) =>
      tech.toLowerCase().includes(normalizedQuery)
    );
    const inTags = project.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedQuery)
    );

    return inTitle || inSubtitle || inDesc || inCompany || inStack || inTags;
  });
}

/**
 * Search and filter skills based on a query keyword
 */
export function searchSkills(
  categories: SkillCategory[],
  query: string = ''
): SkillCategory[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return categories;

  return categories
    .map((category) => {
      const filteredSkills = category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(normalizedQuery)
      );

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((category) => category.skills.length > 0);
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Please specify a subject or role title.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please enter a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a metric string into numeric and suffix parts for nice typography
 */
export function formatMetricCounter(value: string): { number: string; unit: string } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (match) {
    return {
      number: match[1],
      unit: match[2].trim(),
    };
  }
  return { number: value, unit: '' };
}
