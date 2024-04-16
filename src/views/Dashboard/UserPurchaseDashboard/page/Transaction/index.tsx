import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { TableKit } from "../../../../../components/kit/Table";
import { DeleteLightSvg } from "../../../../../assets";

const Transaction = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Typography display={"inline-block"} marginBottom={"1.6rem"} variant="button">
          تراکنش مالی
        </Typography>
      </Box>

      <Box>
        <TableKit
          secondary
          headers={[
            { children: `تاریخ` },
            { children: `کد رهگیری` },
            { children: `نوع ` },
            { children: `مبلغ` },
            { children: `وضعیت` },
          ]}
          sx={{
            width: "1036px !important",
            "@media (max-width: 1115px)": {
              width: "900px !important",
            },
            "@media (max-width: 980px)": {
              width: "700px !important",
            },

            "@media (max-width: 780px)": {
              width: "100% !important",
            },

            "& th": {
              color: theme.palette.primary["600"],
              backgroundColor: `${theme.palette.grey["50"]} !important`,
              height: "3.2rem !important",
              padding: "1rem !important",
              fontSize: "1.4rem !important",
              fontWeight: "400",
            },
          }}
          rows={[]?.map((item: any, index: any) => {
            return {
              id: index,
              data: {
                title: "test",

                action: (
                  <>
                    <IconButton>
                      <PrompModalKit
                        description={"آیا از حذف فایل پی دی اف مورد نظر مطمئن  هستید؟"}
                        onConfirm={() => {}}
                        approved={"بله"}
                        denied={"خیر"}
                      >
                        <DeleteLightSvg width={16} height={16} />
                      </PrompModalKit>
                    </IconButton>
                  </>
                ),
              },
            };
          })}
        />
      </Box>
    </Box>
  );
};

export default Transaction;
