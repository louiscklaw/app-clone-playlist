import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { customersApi } from '../../../../api/customers';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { paths } from '../../../../paths';
import { usersApi } from '../../../../api/users';
import { CustomerBasicDetails } from '../../../../sections/dashboard/user/user-basic-details';
import { CustomerDataManagement } from '../../../../sections/dashboard/user/user-data-management';
import { CustomerEmailsSummary } from '../../../../sections/dashboard/user/user-emails-summary';
import { CustomerInvoices } from '../../../../sections/dashboard/user/user-invoices';
import { CustomerPayment } from '../../../../sections/dashboard/user/user-payment';
import { CustomerLogs } from '../../../../sections/dashboard/user/user-logs';

import { getInitials } from '../../../../utils/get-initials';

import { useRouter } from 'next/router';

const tabs = [
  { label: 'Details', value: 'details' },
  { label: 'Invoices', value: 'invoices' },
  { label: 'Logs', value: 'logs' },
];

const useCustomer = request => {
  const isMounted = useMounted();
  const [customer, setCustomer] = useState(null);

  const getCustomer = useCallback(async () => {
    try {
      const response = await usersApi.getUser(request);
      console.log({ response, request });

      if (isMounted()) {
        setCustomer(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getCustomer();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return customer;
};

const useInvoices = () => {
  const isMounted = useMounted();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await customersApi.getInvoices();

      if (isMounted()) {
        setInvoices(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getInvoices();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return invoices;
};

const useLogs = () => {
  const isMounted = useMounted();
  const [logs, setLogs] = useState([]);

  const getLogs = useCallback(async () => {
    try {
      const response = await customersApi.getLogs();

      if (isMounted()) {
        setLogs(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getLogs();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return logs;
};

const Page = () => {
  const { index, edit } = paths.dashboard.users;
  const [currentTab, setCurrentTab] = useState('details');
  const router = useRouter();
  const { userId } = router.query;

  const customer = useCustomer({ id: userId });
  const invoices = useInvoices();
  const logs = useLogs();

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  console.log({ query: router.query, customer });

  console.log({ customer });
  if (customer?.err) {
    return <>error found during find user</>;
  }

  if (!customer) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard: Customer Details | Devias Kit PRO</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Stack spacing={4}>
            <div>
              <Link
                color="text.primary"
                component={NextLink}
                href={index}
                sx={{ alignItems: 'center', display: 'inline-flex' }}
                underline="hover"
              >
                <SvgIcon sx={{ mr: 1 }}>
                  <ArrowLeftIcon />
                </SvgIcon>
                <Typography variant="subtitle2">Users</Typography>
              </Link>
            </div>
            <Stack
              alignItems="flex-start"
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              spacing={4}
            >
              <Stack alignItems="center" direction="row" spacing={2}>
                <Avatar src={customer.avatar} sx={{ height: 64, width: 64 }}>
                  {getInitials(customer.name)}
                </Avatar>
                <Stack spacing={1}>
                  <Typography variant="h4">{customer.email}</Typography>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Typography variant="subtitle2">user_id:</Typography>
                    <Chip label={customer.id} size="small" />
                  </Stack>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Button
                  color="inherit"
                  component={NextLink}
                  endIcon={
                    <SvgIcon>
                      <Edit02Icon />
                    </SvgIcon>
                  }
                  href={edit.replace(/:userId/g, customer.id)}
                >
                  Edit
                </Button>
                <Button
                  endIcon={
                    <SvgIcon>
                      <ChevronDownIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Actions
                </Button>
              </Stack>
            </Stack>
            <div>
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                sx={{ mt: 3 }}
                textColor="primary"
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map(tab => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
              <Divider />
            </div>
          </Stack>
          {currentTab === 'details' && (
            <div>
              <Grid container spacing={4}>
                <Grid xs={12} lg={4}>
                  <CustomerBasicDetails
                    address1={customer.address1}
                    address2={customer.address2}
                    country={customer.country}
                    email={customer.email}
                    isVerified={!!customer.isVerified}
                    phone={customer.phone}
                    state={customer.state}
                  />
                </Grid>
                <Grid xs={12} lg={8}>
                  <Stack spacing={4}>
                    <CustomerPayment />
                    <CustomerEmailsSummary />
                    <CustomerDataManagement />
                  </Stack>
                </Grid>
              </Grid>
            </div>
          )}
          {currentTab === 'invoices' && <CustomerInvoices invoices={invoices} />}
          {currentTab === 'logs' && <CustomerLogs logs={logs} />}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
