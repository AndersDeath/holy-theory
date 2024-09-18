---
title: What is Source control  in programming?
tags: ["question", "interview", "theory", "computer-science"]
languages: [""]
---

# What is Source control  in programming?

**Source control** (also known as **version control**) is a system used in software development to track and manage changes to the codebase or other project files over time. It allows multiple developers to collaborate on a project, maintain a history of changes, and ensure that versions of code are stored and retrievable.

### Key Concepts in Source Control:

1. **Repository (Repo)**:
   A repository is a storage location for the project’s files and their version history. It can be either local (on a developer’s computer) or remote (on a server).

2. **Versioning**:
   Source control records and maintains different versions of the codebase. When a file is modified, a new version is created, allowing developers to roll back to a previous state if needed.

3. **Commit**:
   A commit is a saved change to the code. Each commit represents a snapshot of the project at a specific point in time, along with a message explaining what changes were made.

4. **Branching**:
   Branching allows developers to diverge from the main line of development to work on features, fixes, or experiments without affecting the main codebase. Developers can create separate branches for each task and later merge them back into the main branch (usually called `main` or `master`).

5. **Merging**:
   Merging is the process of integrating changes from one branch into another. When multiple developers work on different branches, their work can be merged into a shared branch.

6. **Conflict Resolution**:
   When two or more developers make changes to the same part of a file, a **merge conflict** can occur during the merging process. Developers must manually resolve these conflicts.

7. **Pull and Push**:
   - **Pull**: Developers pull changes from a remote repository to update their local version of the code with the latest changes.
   - **Push**: Developers push their changes from their local repository to a remote one, making them available to others.

8. **Forking**:
   A fork is a personal copy of someone else’s project repository. Forking allows developers to freely experiment with changes without affecting the original project. Once the changes are stable, they can be proposed for merging into the original project via a **pull request**.

### Benefits of Source Control:

- **Collaboration**: Multiple developers can work on the same project simultaneously, with changes tracked independently.
- **History Tracking**: All changes are logged, so it's easy to see who made what changes and why, along with reverting to previous versions if necessary.
- **Backup**: A remote repository can serve as a backup, ensuring that code isn’t lost if a local machine fails.
- **Code Review**: Source control systems often have built-in tools for reviewing and discussing changes before they are integrated into the main project.
  
### Popular Source Control Systems:

- **Git**: The most widely used source control system, known for its distributed nature. Developers work with local copies of the repository, and then sync with a remote repository (e.g., on GitHub, GitLab, Bitbucket).
- **Subversion (SVN)**: A centralized version control system where developers pull from and push to a single central repository.
- **Mercurial**: Another distributed version control system similar to Git.

Git, in particular, is extremely popular due to its flexibility and the prevalence of platforms like **GitHub** or **GitLab** that facilitate collaboration, hosting, and project management.