import Layout from '@/layout'
export default    {
    path: '/permission',
    component: Layout,
    redirect: "/permission/1-1",
    name: "permission",
    meta: { title: "商品管理", icon: "goods" },
    children: [
      {
        path: "1-1",
        name: "1-1",
        component: () => import("@/views/permission/1-1"),
        meta: { title: "商品类型" },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () => import("@/views/permission/1-2"),
        meta: { title: "商品管理" },
      },
    ]
  }
