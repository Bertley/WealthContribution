import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import Contributions from './components/Contributions/Contributions';
import ContributionEdit from './components/ContributionEdit/ContributionEdit';
import ContributionActions from './components/ContributionActions/ContributionActions';
import ContributionCancel from './components/ContributionCancel/ContributionCancel';

const App = () => {
  return (
    <>
      <Card>
        <CardHeader title="My Contributions" />
        <CardContent>
          <Contributions />
        </CardContent>
        <ContributionActions />
      </Card>
      <ContributionEdit />
      <ContributionCancel />
    </>
  );
}

export default App;
