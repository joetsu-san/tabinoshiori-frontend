"use client";

import Link from "next/link";
import { Box, createStyles, Grid, Popover, rem, Text, Tooltip } from "@mantine/core";
import { IconBookmark, IconCalendar, IconMap, IconTimeline } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { firebaseUserIdState } from "@/atoms";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  footer_nav: {
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    marginTop: rem(120),
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    width: "100%",

    fontSize: rem(4),
    zIndex: 100,
  },
}));

export const FooterNav = () => {
  const { classes } = useStyles();
  const pathname = usePathname();
  const router = useSearchParams();
  const firebaseUserId = useRecoilValue(firebaseUserIdState);
  const [opened, { close, open }] = useDisclosure(false);

  const navItems = [
    {
      path: "/tourismspot",
      label: "観光地一覧",
      icon: <IconMap />,
    },
    {
      path: "/modelcourse",
      label: "モデルコース",
      icon: <IconTimeline />,
    },
    {
      path: "/bookmark",
      label: "お気に入り",
      isCheckLogin: true,
      icon: <IconBookmark />,
    },
    {
      path: "/travelplan",
      label: "旅のしおり",
      isCheckLogin: true,
      icon: <IconCalendar />,
    },
  ];

  return (
    <>
      <div className={classes.footer_nav}>
        {/* <Group spacing="xl"> */}
        <Grid grow gutter="lg">
          {navItems.map((item, index) => (
            <Grid.Col
              key={index}
              span={3}
              style={item.path === pathname ? { backgroundColor: "#15AABF", color: "#FFF", borderRadius: "50px" } : {}}
            >
              {item.isCheckLogin && firebaseUserId == null ? (
                <Tooltip.Floating placeholder="top" label="ログインしてください">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#b4b4b4" }}>
                    {item.icon}
                    <Text>{item.label}</Text>
                  </Box>
                </Tooltip.Floating>
              ) : (
                <Link href={item.path} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {item.icon}
                  <Text>{item.label}</Text>
                </Link>
              )}
            </Grid.Col>
          ))}
        </Grid>
        {/* </Group> */}
      </div>
    </>
  );
};
