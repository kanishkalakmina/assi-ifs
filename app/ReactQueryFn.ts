
// export async function getUserUseQuery(id: number) {
//     return new Promise<{ id: number, name: string }>((resolve) => {
//       setTimeout(() => {
//         resolve({ id: id, name: "User" + id });
//       }, Math.random() * 1000);
//     });
//   }

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['users', userIds],
//     queryFn: async () => {
//       const usersData: { id: number; name: string }[] = [];
//       for (const id of userIds) {
//         const user = await getUserUseQuery(id);
//         usersData.push(user);
//       }
//       return usersData;
//     }
//   });
