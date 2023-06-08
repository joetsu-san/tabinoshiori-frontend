"use client";

import Link from "next/link";
import { createStyles, Group, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer_nav: {
    marginTop: rem(120),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },
}));

export default function FooterNav() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.footer_nav}>
        <Group>
          <Link href={"/bookmark"}>bookmark</Link>
          <Link href={"/modelcourse"}>modelcourse</Link>
          <Link href={"/tourismspot"}>tourismspot</Link>
          <Link href={"/travelplan"}>travelplan</Link>
        </Group>
      </div>
    </>
  );
}
