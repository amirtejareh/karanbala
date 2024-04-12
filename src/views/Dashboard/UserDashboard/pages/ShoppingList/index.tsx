import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { TableKit } from "../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg } from "../../../../../assets";

const ShoppingList = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Typography display={"inline-block"} marginBottom={"1.6rem"} variant="button">
          لیست خریدها
        </Typography>
        <Typography marginBottom={"1.6rem"} variant="body2">
          بر اساس موارد دلخواه فیلتر کنید
        </Typography>
      </Box>
      <Box
        marginBottom={"2.4rem !important"}
        sx={{
          "& button": {
            borderRadius: "0.8rem",
            padding: "6px  12px 6px 12px",
            height: "2.8rem",
            bgcolor: theme.palette.common.white,
            border: `1px solid ${theme.palette.secondary["500"]}`,
            color: theme.palette.secondary["500"],
          },
        }}
        display={"flex"}
        gap={"0.8rem"}
      >
        <Button>
          <Typography>همه</Typography>
        </Button>
        <Button>
          <Typography>آموزش</Typography>
        </Button>
        <Button>
          <Typography>آزمون تستی</Typography>
        </Button>
        <Button>
          <Typography>آزمون تشریحی</Typography>
        </Button>
      </Box>
      <Box>
        <TableKit
          secondary
          headers={[
            { children: `تاریخ` },
            { children: `نوع اشتراک` },
            { children: `پایه` },
            { children: `نوع آزمون` },
            { children: `کتاب` },
            { children: `شماره ترم` },
            { children: `شماره آزمون` },
            { children: `مبلغ ثبت شده` },
            { children: `عملیات` },
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

export default ShoppingList;
