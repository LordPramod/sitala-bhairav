// import { Flex, IconButton } from "@chakra-ui/react";

// import { TableActionsProps } from "@/shared/types";
// import { Tooltip } from "@/shared/ui";

// export const TableActions = ({
//   onView,
//   onEdit,
//   onDelete,
// }: TableActionsProps) => {
//   return (
//     <Flex alignItems="center" gap="3">
//       {!!onView && (
//         <Tooltip content="View">
//           <IconButton
//             aria-label="View"
//             variant={"ghost"}
//             color={"black"}
//             _focus={{
//               backgroundColor: "transparent",
//             }}
//             height="6"
//             minWidth="6"
//           >
//             {/* <EyeOpenIcon onClick={onView} /> */}
//           </IconButton>
//         </Tooltip>
//       )}

//       {!!onEdit && (
//         <Tooltip content="Edit">
//           <IconButton
//             aria-label="Edit"
//             color={"black"}
//             background="transparent"
//             _focus={{
//               backgroundColor: "transparent",
//             }}
//             height="6"
//             minWidth="6"
//           >
//             {/* <EditIcon onClick={onEdit} /> */}
//           </IconButton>
//         </Tooltip>
//       )}

//       {!!onDelete && (
//         <Tooltip content="Delete">
//           <IconButton
//             aria-label="Delete"
//             color={"black"}
//             background="transparent"
//             _focus={{
//               backgroundColor: "transparent",
//             }}
//             height="6"
//             minWidth="6"
//           >
//             {/* <DeleteIcon onClick={onDelete} /> */}
//           </IconButton>
//         </Tooltip>
//       )}
//     </Flex>
//   );
// };
