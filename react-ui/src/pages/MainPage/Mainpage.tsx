import { history } from '@umijs/max';
import { Button, Result, Layout, Typography, Card, Row, Col, Space } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const BlogMainPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "我的第一篇博客",
      excerpt: "这是我的个人博客网站，我将在这里分享我的技术经验和学习心得。",
      date: "2023-10-15"
    },
    {
      id: 2,
      title: "React开发技巧分享",
      excerpt: "在React开发过程中的一些实用技巧和经验总结。",
      date: "2023-10-10"
    },
    {
      id: 3,
      title: "前端工程化实践",
      excerpt: "介绍前端项目中的工程化实践和优化方案。",
      date: "2023-10-05"
    },
    {
      id: 4,
      title: "Vue3 Composition API详解",
      excerpt: "深入理解Vue3 Composition API的设计理念和使用方法。",
      date: "2023-09-28"
    },
    {
      id: 5,
      title: "TypeScript进阶指南",
      excerpt: "掌握TypeScript的高级特性，提升代码质量和开发效率。",
      date: "2023-09-20"
    },
    {
      id: 6,
      title: "Node.js微服务架构实践",
      excerpt: "探讨如何使用Node.js构建可扩展的微服务架构系统。",
      date: "2023-09-15"
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px',
        boxShadow: '0 1px 4px rgba(0,21,41,.12)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          height: '100%',
          justifyContent: 'space-between'
        }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            尊敬的面试官您好
          </Title>
          <Space>
          <Button type="text" onClick={() => history.push('http://littlezhen.top/')}>切换vue版本</Button>
            <Button type="text" onClick={() => history.push('/')}>个人中心</Button>
            <Button type="text" onClick={() => history.push('/archives')}>归档</Button>
            <Button type="text" onClick={() => history.push('/about')}>关于</Button>
          </Space>
        </div>
      </Header>

      <Content style={{ padding: '24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
            marginBottom: 40,
            color: 'white'
          }}>
            <Title level={2} style={{ color: 'white', marginBottom: 16 }}>尊敬的面试官您好</Title>
            <Paragraph style={{ fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
              在这里我会分享我的技术经验、学习心得和生活感悟
            </Paragraph>
          </div>

          <Title level={3} style={{ marginBottom: 24 }}>最新文章</Title>
          <Row gutter={[24, 24]}>
            {blogPosts.map(post => (
              <Col xs={24} sm={12} key={post.id}>
                <Card 
                  hoverable 
                  onClick={() => history.push(`/MainPage/Post/?id=${post.id}`)}
                  style={{ borderRadius: 8 }}
                >
                  <Title level={4} style={{ marginBottom: 8 }}>{post.title}</Title>
                  <Paragraph type="secondary" style={{ marginBottom: 12 }}>
                    {post.date}
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 0 }}>
                    {post.excerpt}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>

      <Footer style={{ 
        textAlign: 'center', 
        background: '#f0f2f5',
        padding: '24px 0'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Paragraph>
            © {new Date().getFullYear()} 我的个人博客 - 记录学习与成长
          </Paragraph>
          <Space>
            <Button type="link" onClick={() => history.push('/privacy')}>隐私政策</Button>
            <Button type="link" onClick={() => history.push('/contact')}>联系我们</Button>
          </Space>
        </div>
      </Footer>
    </Layout>
  );
};

export default BlogMainPage;
