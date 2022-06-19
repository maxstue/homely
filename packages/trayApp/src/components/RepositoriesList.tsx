import React, { FC } from 'react';
import { useQuery } from 'urql';

const query = `
{
    
}
`;

export interface RepositoriesListProps {}

const RepositoriesList: FC<RepositoriesListProps> = () => {
  const [{ data, error, fetching }] = useQuery({ query: query });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const repos = data.gitHub.user.repositories.nodes as any[];
  return (
    <>
      <div>RepositoriesList</div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RepositoriesList;
