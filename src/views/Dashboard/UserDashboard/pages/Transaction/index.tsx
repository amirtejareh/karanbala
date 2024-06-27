import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableKit } from "../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg } from "../../../../../assets";
import useGetPayments from "../../../../../hooks/payment/useGetPayments";

const Transaction = () => {
  const theme = useTheme();
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(10);
  const [pageSize, setPageSize] = useState<number>();

  const transaction = useGetPayments(page, limit);

  useEffect(() => {
    if (transaction?.data) {
      setPage(parseInt(transaction?.data?.currentPage ?? 1));
      setPageSize(transaction?.data?.totalPages ?? 1);
    }
  }, [transaction?.data]);

  useEffect(() => {
    if (page > 0 && page <= transaction?.data?.totalPages) {
      transaction.refetch();
    }
  }, [page]);

  return (
    <Box>
      <Box>
        <Typography display={"inline-block"} marginBottom={"1.6rem"} variant="button">
          تراکنش مالی
        </Typography>
      </Box>

      <Box>
        {!transaction.isLoading && transaction?.data ? (
          <TableKit
            secondary
            headers={[
              { children: `تاریخ`, width: "200px" },
              { children: `کد رهگیری`, width: "100px" },
              { children: `نوع `, width: "150px" },
              { children: `مبلغ`, width: "150px" },
              { children: `وضعیت` },
            ]}
            sx={{
              "& tr td": { textAlign: "left !important" },
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
            rows={transaction?.data?.allTransactions?.map((item: any, index: any) => {
              return {
                id: index,
                data: {
                  updatedAt: item?.updatedAt,
                  refId: (
                    <Box sx={{ textAlign: item?.refId ? "" : "center !important" }}>
                      {item?.refId ?? "-"}
                    </Box>
                  ),

                  type: item?.type === "comprehensive_test" ? "تست جامع" : "آزمون انتخابی",
                  amount: item?.amount,
                  verify: item?.verify ? (
                    <Typography color={theme.palette.success.main}>پرداخت شده</Typography>
                  ) : (
                    <Typography color={theme.palette.error.main}>در انتظار پرداخت</Typography>
                  ),
                },
              };
            })}
            pagination={{
              page: page,
              count: pageSize,
              rowsPerPage: limit,
              onChange: (_, e) => {
                setPage(e);
              },
              onRowsPerPageChange: () => {},
            }}
          />
        ) : (
          <Typography>در حال بارگزاری</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Transaction;
