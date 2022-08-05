import Layout from '@/layout'
export default  {
    path: '/approvals',
    component: Layout,
    redirect: "/approvals/1-1",
    name: "approvals",
    meta: { title: "工单管理", icon: "work_order" },
    children: [
      {
        path: "1-1",
        name: "1-1",
        component: () => import("@/views/approvals/1-1"),
        meta: { title: "运营工单" },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () => import("@/views/approvals/1-2"),
        meta: { title: "运维工单" },
      },
    ]
  }