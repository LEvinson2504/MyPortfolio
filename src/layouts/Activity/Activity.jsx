import React, {useState, useEffect} from 'react';
import styles from './Activity.module.css';

const Commit = ({commit}) => {
  return <div className={styles.commit}>
    <div className={styles.profile}>
      <img src={commit.actor.avatar_url} />
      <a href={commit.actor.url}>{commit.actor.login}</a>
      <span className={styles.date}>
        {new Date(commit.created_at).toDateString()}
      </span>
    </div>
    <div className={styles.event}><p>{commit.type}</p></div>
    <div>to <a href={commit.repo.url}>{commit.repo.name}</a></div>
  </div>
}

const Activity = () => {
  const url = "https://api.github.com/users/LEvinson2504/events";
  const getCommitData = async (url) => {
    return await fetch(url).then(r => r.json())
  }
  const [commits, setCommits] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await getCommitData(url);
      setCommits(response)
    }
    fetchData();
  }, [])

  console.log(commits)
  return <div className={styles.container}>
    {commits && commits.map(commit => <Commit commit={commit} />)}
  </div>
}

export default Activity;
