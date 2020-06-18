import './Dashboard.scss';

import Button from 'components/Button';
import Card from 'components/Card/';
import React from 'react';

const Header = () => {
  return (
    <header className={'horizontal-scroll'}>
      <h2>CInside</h2>
      <section className={'scrollable'}>
        <Button light text={'Dashboard'} />
        <Button light text={'Students'} />
        <Button light text={'Teachers'} />
        <Button light text={'Courses'} />
        <Button light text={'Departments'} />
        <Button light text={'Classes'} />
      </section>
    </header>
  );
};

const Cards = () => {
  return (
    <section className={'scrollable'}>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
      <Card>card</Card>
    </section>
  );
};

const Dashboard = () => {
  return (
    <main className={'horizontal-scroll'}>
      <Header />
      <Cards />
      dashboard
    </main>
  );
};

export default Dashboard;
