import axios from 'axios';

interface IGitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location: string;
  email?: any;
  hireable?: any;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface IResponse<T, A> {
  action: A;
  data: T;
}

const GET_GITHUB_USER = 'GET_GITHUB_USER';

const makeGetRequest = async <T, A>(url: string, action: A) => {
  const response = await axios.get(url);
  const data: T = response.data;

  return {
    action,
    data
  } as IResponse<T, A>;
};

makeGetRequest<IGitHubUser, typeof GET_GITHUB_USER>(
  'https://api.github.com/users/chadlefort',
  GET_GITHUB_USER
).then(data => console.log(data));
