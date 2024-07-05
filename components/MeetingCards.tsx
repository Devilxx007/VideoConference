"use client";
import Image from "next/image";
import React, { useState } from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import {
  Call,
  StreamVideoClient,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { Textarea } from "./ui/textarea";
import DatePicker from "react-datepicker";

const MeetingCards = () => {
  const router = useRouter();
  const [values, setvalues] = useState({
    datetime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setcallDetails] = useState<Call>();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to call");

      const startsAt =
        values.datetime.toISOString() || new Date(Date.now()).toISOString;
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setcallDetails(call);

      if (meetingState == "isInstantMeeting") {
        router.push(`/meeting/${call.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
  return (
    <section className=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Card
        classname="bg-[#FF742E]"
        img="/plus.svg"
        title="New Meeting"
        description="Setup a new meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <Card
        classname="bg-[#0E78F9]"
        img="/join-meeting.svg"
        title="Join Meeting"
        description="via invitaion link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <Card
        classname="bg-[#830EF9]"
        img="/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <Card
        classname="bg-[#F9A90E]"
        img="/recordings.svg"
        title="View Recordings"
        description="Meeting recordings"
        handleClick={() => router.push("/recording")}
      />

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          buttontext="Schedule Meeting"
          handleClick={createMeeting}
        >
          <div className=" flex flex-col gap-4">
            <p className="text-white">Add description</p>
            <Textarea className=" bg-dark-2 text-white" />
          </div>
          <div className=" flex flex-col gap-4 text-white">
            <p className="">Schedule Date and Time</p>
            <DatePicker
              selected={values.datetime}
              onChange={(date) => setvalues({ ...values, datetime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="MMMM,d,yyyy h:mm aa"
              timeIntervals={15}
              timeCaption="time"
              className=" px-5 py-2 w-full rounded-md bg-dark-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          image="/checked.svg"
          title="Meeting Created"
          buttontext="Copy Meeting Link"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
          }}
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        buttontext="Start Meeting"
        handleClick={createMeeting}
      />

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        buttontext="Join Meeting"
        handleClick={()=>{
          router.push(values.link)
        }}
      >
        <Input placeholder="Meeting Link" onChange={(e)=>setvalues({...values,link:e.target.value})} className=" w-full bg-dark-2 focus:outline-none border-none"/>
      </MeetingModal>
    </section>
  );
};
export default MeetingCards;
