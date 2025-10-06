export function Button({ text = '', variant = 'primary', href = '#' } = {}) {
  const classes = variant === 'secondary'
    ? 'cta-button secondary'
    : 'cta-button';
  return `<a href="${href}" class="${classes}">${text}</a>`;
}
