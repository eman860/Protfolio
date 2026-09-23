import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

// Fallback verified data if GitHub API is offline or rate-limited
const staticGitHubData = {
  login: 'eman860',
  name: 'Eman A (Imman)',
  avatar_url: 'https://github.com/eman860.png',
  public_repos: 12,
  followers: 4,
  following: 5,
  html_url: 'https://github.com/eman860',
  pinnedRepos: [
    {
      name: 'eye_project',
      description: 'Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches (ICCIS-3.0 Conference Paper).',
      language: 'Python',
      html_url: 'https://github.com/eman860/eye_project',
    },
    {
      name: 'NEURO_BILLL',
      description: 'Smart billing, invoice generation, and inventory management suite with database logging.',
      language: 'Python',
      html_url: 'https://github.com/eman860/NEURO_BILLL',
    },
    {
      name: 'E-commerce-shop-website-project',
      description: 'Modern, responsive online shopping store with interactive cart and instant search.',
      language: 'JavaScript',
      html_url: 'https://github.com/eman860/E-commerce-shop-website-project',
    },
    {
      name: 'TO-DO-List',
      description: 'Persistent task and productivity manager with category priority tags and zero latency.',
      language: 'JavaScript',
      html_url: 'https://github.com/eman860/TO-DO-List',
    },
  ],
};

export default function GitHubActivity() {
  const [githubUser, setGithubUser] = useState(staticGitHubData);
  const [repos, setRepos] = useState(staticGitHubData.pinnedRepos);

  useEffect(() => {
    // Attempt live fetch from GitHub public REST API
    fetch('https://api.github.com/users/eman860')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API rate limit');
        return res.json();
      })
      .then((data) => {
        setGithubUser((prev) => ({
          ...prev,
          public_repos: data.public_repos || prev.public_repos,
          followers: data.followers || prev.followers,
          following: data.following || prev.following,
          avatar_url: data.avatar_url || prev.avatar_url,
        }));
      })
      .catch(() => {
        // Silently use verified static data
      });
  }, []);

  return (
    <section id="code-activity" className="section-padding github-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>05 // CODE ACTIVITY</span>
          </div>
          <h2 className="section-title">
            Open Source & <span className="text-gradient">Repositories</span>
          </h2>
          <p className="section-subtitle">
            Public repositories and open development activity tracked directly on GitHub.
          </p>
        </div>

        {/* GitHub Metrics Card */}
        <div className="github-profile-card glass-panel">
          <div className="gh-user-row">
            <img
              src={githubUser.avatar_url}
              alt="GitHub Profile"
              className="gh-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="gh-user-info">
              <div className="gh-title-row">
                <h3 className="gh-name">{githubUser.name || 'Eman A'}</h3>
                <span className="gh-username">@{githubUser.login}</span>
              </div>
              <p className="gh-bio">
                Building full-stack Java systems, Python automation, and modern web applications.
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gh-profile-link"
              data-cursor="GITHUB"
            >
              <span>Follow on GitHub</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="gh-stats-row">
            <div className="gh-stat-box">
              <span className="gh-stat-val text-gradient">{githubUser.public_repos}+</span>
              <span className="gh-stat-lbl">Public Repos</span>
            </div>
            <div className="gh-stat-box">
              <span className="gh-stat-val text-gradient">25+</span>
              <span className="gh-stat-lbl">DSA Solved</span>
            </div>
            <div className="gh-stat-box">
              <span className="gh-stat-val text-gradient">Active</span>
              <span className="gh-stat-lbl">Contribution State</span>
            </div>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="gh-repos-grid">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card glass-panel"
              data-cursor="REPO ↗"
            >
              <div className="repo-header">
                <span className="repo-icon">📂</span>
                <h4 className="repo-name">{repo.name}</h4>
                <span className="repo-arrow">↗</span>
              </div>
              <p className="repo-desc">{repo.description}</p>
              <div className="repo-footer">
                <span className="repo-lang-dot" />
                <span className="repo-lang">{repo.language}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
