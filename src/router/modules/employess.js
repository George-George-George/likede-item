import Layout from '@/layout'
export default  {
    path: '/employees',
    component: Layout,
    redirect: "/employees/1-1",
    name: "employees",
    meta: { title: "人员管理", icon: "people" },
    children: [
      {
        path: "1-1",
        name: "1-1",
        component: () => import("@/views/employees/1-1"),
        meta: { title: "人员列表" },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () => import("@/views/employees/1-2"),
        meta: { title: "人效统计" },
      },
      {
        path: "1-3",
        name: "1-3",
        component: () => import("@/views/employees/1-3"),
        meta: { title: "工作量列表" },
      },
    ]
  }