import { history, useLocation } from '@umijs/max';
import { Button, Layout, Typography, Card, Row, Col, Space, Tag } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

// 模拟文章数据 - 在实际应用中这应该来自API或状态管理
const postsData = [
  {
    id: 1,
    title: "我的第一篇博客",
    content: `
      <p>欢迎来到我的个人博客！这是我写的第一篇博客文章。</p>
      <p>在这里，我将分享我在前端开发领域的经验和学习心得。作为一名前端工程师，我热衷于探索新技术，并将所学应用到实际项目中。</p>
      <p>本博客将涵盖以下主题：</p>
      <ul>
        <li>前端框架（React, Vue, Angular等）</li>
        <li>现代JavaScript特性</li>
        <li>CSS和UI设计</li>
        <li>前端工程化实践</li>
        <li>性能优化技巧</li>
      </ul>
      <p>希望通过这些分享能够帮助到同样热爱前端开发的朋友们，也欢迎大家一起交流讨论！</p>
    `,
    date: "2023-10-15",
    tags: ["博客", "前端", "介绍"],
    author: "博主"
  },
  {
    id: 2,
    title: "React开发技巧分享",
    content: `
      <p>React作为目前最流行的前端框架之一，拥有庞大的生态系统和社区支持。</p>
      <p>在实际开发过程中，我总结了一些实用的技巧和最佳实践：</p>
      <h3>1. 合理使用Hooks</h3>
      <p>useState和useEffect是两个最常用的Hooks，但要注意不要过度使用useEffect，避免不必要的重新渲染。</p>
      <h3>2. 组件拆分</h3>
      <p>将大组件拆分成小组件，提高代码的可维护性和复用性。</p>
      <h3>3. 状态管理</h3>
      <p>对于复杂应用，合理选择状态管理方案（如Redux、MobX或Context API）。</p>
      <p>这些技巧可以帮助你写出更高效、更易维护的React代码。</p>
    `,
    date: "2023-10-10",
    tags: ["React", "JavaScript", "前端"],
    author: "博主"
  },
  {
    id: 3,
    title: "前端工程化实践",
    content: `
      <p>随着前端项目的复杂度不断提升，工程化成为了提高开发效率和代码质量的重要手段。</p>
      <h3>构建工具</h3>
      <p>Webpack、Vite、Rollup等构建工具可以帮助我们优化资源加载、代码分割和打包效率。</p>
      <h3>代码规范</h3>
      <p>通过ESLint、Prettier等工具统一代码风格，提高代码可读性。</p>
      <h3>自动化测试</h3>
      <p>单元测试、集成测试和端到端测试能够有效减少bug，提高代码可靠性。</p>
      <h3>持续集成</h3>
      <p>CI/CD流程可以自动化测试、构建和部署，提高发布效率。</p>
    `,
    date: "2023-10-05",
    tags: ["前端", "工程化", "工具"],
    author: "博主"
  },
  {
    id: 4,
    title: "Vue3 Composition API详解",
    content: `
      <p>Vue3引入的Composition API为开发者提供了更灵活的组件组织方式。</p>
      <h3>与Options API的对比</h3>
      <p>Composition API将相关逻辑组织在一起，避免了Options API中逻辑分散的问题。</p>
      <h3>响应式系统</h3>
      <p>ref和reactive是创建响应式数据的主要方法，理解它们的区别很重要。</p>
      <h3>生命周期钩子</h3>
      <p>Composition API中的生命周期钩子与Options API有所不同，需要特别注意。</p>
      <p>掌握Composition API能够帮助我们构建更易维护的Vue应用。</p>
    `,
    date: "2023-09-28",
    tags: ["Vue", "前端", "框架"],
    author: "博主"
  },
  {
    id: 5,
    title: "TypeScript进阶指南",
    content: `
      <p>TypeScript为JavaScript添加了静态类型检查，大大提高了代码的可维护性。</p>
      <h3>高级类型</h3>
      <p>掌握联合类型、交叉类型、泛型等高级类型用法。</p>
      <h3>类型守卫</h3>
      <p>使用typeof、instanceof和自定义类型守卫确保运行时类型安全。</p>
      <h3>装饰器</h3>
      <p>了解装饰器的使用场景，如在Angular中的应用。</p>
      <p>TypeScript的深入学习能够帮助我们构建更健壮的前端应用。</p>
    `,
    date: "2023-09-20",
    tags: ["TypeScript", "JavaScript", "编程"],
    author: "博主"
  },
  {
    id: 6,
    title: "Node.js微服务架构实践",
    content: `
      <p>随着业务复杂度的增加，单体应用逐渐难以满足需求，微服务架构应运而生。</p>
      <h3>服务拆分原则</h3>
      <p>按照业务领域进行服务拆分，确保服务的高内聚低耦合。</p>
      <h3>通信机制</h3>
      <p>REST API、GraphQL、gRPC等通信方式各有适用场景。</p>
      <h3>数据管理</h3>
      <p>每个微服务应该拥有独立的数据存储，避免数据耦合。</p>
      <h3>服务治理</h3>
      <p>通过服务注册发现、负载均衡、熔断器等机制保证系统稳定性。</p>
    `,
    date: "2023-09-15",
    tags: ["Node.js", "后端", "架构"],
    author: "博主"
  }
];

const Post: React.FC = () => {
  const location = useLocation();
  const postId=location.search[4];
//   const postId = parseInt(location.pathname.split('/')[2]);
    console.log(postId);
// 查找对应的文章
  const post = postsData.find(p => p.id === parseInt(postId));
  
  if (!post) {
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
              <Button type="text" onClick={() => history.push('/')}>个人中心</Button>
              <Button type="text" onClick={() => history.push('/archives')}>归档</Button>
              <Button type="text" onClick={() => history.push('/about')}>关于</Button>
            </Space>
          </div>
        </Header>
        
        <Content style={{ padding: '24px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <Card>
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <Title level={2}>文章未找到</Title>
                <Paragraph>抱歉，您访问的文章不存在。</Paragraph>
                <Button type="primary" onClick={() => history.push('/')}>
                  返回首页
                </Button>
              </div>
            </Card>
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
  }

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
            <Button type="text" onClick={() => history.push('/')}>个人中心</Button>
            <Button type="text" onClick={() => history.push('/archives')}>归档</Button>
            <Button type="text" onClick={() => history.push('/about')}>关于</Button>
          </Space>
        </div>
      </Header>

      <Content style={{ padding: '24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Card style={{ borderRadius: 8 }}>
            <div style={{ marginBottom: 24 }}>
              <Button onClick={() => history.push('/MainPage')} style={{ marginBottom: 16 }}>
                ← 返回首页
              </Button>
              <Title level={2} style={{ marginBottom: 16 }}>{post.title}</Title>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ marginRight: 24 }}>作者: {post.author}</span>
                <span>{post.date}</span>
              </div>
              <div>
                {post.tags.map((tag, index) => (
                  <Tag color="blue" key={index}>{tag}</Tag>
                ))}
              </div>
            </div>
            
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              style={{ fontSize: 16, lineHeight: 1.8 }}
            />
          </Card>
          
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <Button type="primary" onClick={() => history.push('/MainPage')}>
              查看更多文章
            </Button>
          </div>
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

export default Post;
