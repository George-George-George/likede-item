import Layout from '@/layout'
export default   {
    path: '/attendances',
    component: Layout,
    redirect: "/attendances/1-1",
    name: "attendances",
    meta: { title: "点位管理", icon: "PT" },
    children: [
      {
        path: "1-1",
        name: "1-1",
        component: () => import("@/views/attendances/1-1"),
        meta: { title: "区域管理" },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () => import("@/views/attendances/1-2"),
        meta: { title: "点位管理" },
      },
      {
        path: "1-3",
        name: "1-3",
        component: () => import("@/views/attendances/1-3"),
        meta: { title: "合作商管理" },
      },
    ]
  }