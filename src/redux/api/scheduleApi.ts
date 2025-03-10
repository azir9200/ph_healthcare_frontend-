import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";
import { ISchedule } from "@/types/schedule";
interface IScheduleResponse {
  schedules: {
    data: ISchedule[]; // Array of schedules
  };
  meta: IMeta;
}

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    //get api
    getAllSchedules: build.query<IScheduleResponse, Record<string, any>>({
      query: (arg: Record<string, any>) => {
        return {
          url: "/schedule",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: { data: ISchedule[] }, meta: IMeta) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
