import Layout from '@/layout'
export default    {
    path: '/departments',
    component: Layout,
    redirect: "/departments/1-1",
    name: "departments",
    meta: { title: "设备管理", icon: "device" },
    children: [
      {
        path: "1-1",
        name: "1-1",
        component: () => import("@/views/departments/1-1"),
        meta: { title: "设备管理" },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () => import("@/views/departments/1-2"),
        meta: { title: "设备状态" },
      },
      {
        path: "1-3",
        name: "1-3",
        component: () => import("@/views/departments/1-3"),
        meta: { title: "设备类型管理" },
      },
    ]
  }