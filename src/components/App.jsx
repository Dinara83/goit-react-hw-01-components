import Profile from 'components/Profile/Profile';
import FriendList from 'components/FriendList/FriendList';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
