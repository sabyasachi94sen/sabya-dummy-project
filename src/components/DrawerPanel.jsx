// components/Drawer.js
import React, { useState } from 'react';
import { Button, Drawer, Flex, Menu } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DatabaseOutlined, DesktopOutlined, HeartOutlined, MailOutlined, PieChartOutlined, ProjectOutlined, RobotOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';
import Link from 'next/link';

const DrawerPanel = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: 'products',
      label: 'Products',
      children: [
        {
          key: 'AI-sales',
          label: 'AI Sales',
          children: [
            { key: '5', label: 'Response Generation', icon: <MailOutlined /> },
            { key: '6', label: 'Enterprise Search', icon: <SearchOutlined /> },
            { key: '7', label: 'Personalization', icon: <HeartOutlined /> },
          ]
        },
        {
          key: 'Use-cases',
          label: 'Use Cases',
          children: [
            { key: '9', label: 'Slhub AI', icon: <RobotOutlined /> },
            { key: '10', label: 'Project Management', icon: <ProjectOutlined /> },
            { key: '11', label: 'Smart Repository', icon: <DatabaseOutlined /> },
          ]
        }

      ],
    },
    {
      key: 'solutions',
      label: 'Solutions',
      children: [],
    },
    {
      key: 'resources',
      label: 'Resources',
      children: [],
    },
    {
      key: 'company',
      label: 'Company',
      children: [
        {
          key: 'about',
          label: <Link onClick={()=>setIsOpen(false)} href="/about">About</Link>,
          icon: <UserOutlined />
          
        },
      ],
    }
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <>
      <Drawer placement='left' title={<Link onClick={()=>setIsOpen(false)} href="/"><Flex  align='center' gap={20}>SLHUB<img src="/img/robot.svg" width={40} /></Flex></Link>} onClose={() => setIsOpen(!isOpen)} open={isOpen}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items} />
      </Drawer>
    </>
  );
};

export default DrawerPanel;
