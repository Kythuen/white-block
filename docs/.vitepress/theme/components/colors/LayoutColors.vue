<template>
  <div
    w="full"
    p="10"
    rounded="md"
    ring="px $wb-color-border-dinky"
    bg="[rgb(var(--wb-vc-background))]"
    flex
    items="start"
    justify="center"
    gap="4"
  >
    <div
      w="full"
      max-w="90"
      h="60"
      p="5"
      ring="px $wb-color-border1-1"
      rounded="md"
      bg="[rgb(var(--wb-vc-card))]"
      flex="~ col"
      justify="between"
    >
      <div flex>
        <wb-popup trigger="click" arrow :content="111" :z-index="100">
          <div flex gap="2">
            <div flex>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-text-normal))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="[rgb(var(--wb-vc-text-active))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div flex>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-card))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="[rgb(var(--wb-vc-active-bg))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
          <template #content>
            <div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-text-normal))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text:active</div>
                <div flex="1">--wb-vc-text-active</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-text-active))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-card))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg:hover</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-active-bg))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
            </div>
          </template>
        </wb-popup>
      </div>
      <div
        p="2"
        ring="px $wb-color-border1-1"
        rounded="md"
        bg="[rgb(var(--wb-vc-tag))] hover:[rgb(var(--wb-vc-active-bg))]"
        flex
        justify-center
        gap="2"
        cursor="pointer"
      >
        <wb-popup trigger="click" arrow :content="111" :z-index="100">
          <div flex gap="2">
            <div flex>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-text-normal))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="[rgb(var(--wb-vc-text-active))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div flex>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-card))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="[rgb(var(--wb-vc-active-bg))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
          <template #content>
            <div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-text-normal))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text:active</div>
                <div flex="1">--wb-vc-text-active</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-text-active))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-card))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg:hover</div>
                <div flex="1">--wb-vc-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="[rgb(var(--wb-vc-active-bg))]"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
            </div>
          </template>
        </wb-popup>
      </div>
    </div>
    <div flex="~ col" gap="2">
      <wb-popup trigger="click" arrow :content="111" :z-index="100">
        <div flex gap="2">
          <div flex>
            <div
              w="4"
              h="4"
              bg="[rgb(var(--wb-vc-text-normal))]"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
            <div
              w="4"
              h="4"
              m="l--1.5"
              bg="[rgb(var(--wb-vc-text-active))]"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
          </div>
          <div flex>
            <div
              w="4"
              h="4"
              bg="[rgb(var(--wb-vc-card))]"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
            <div
              w="4"
              h="4"
              m="l--1.5"
              bg="[rgb(var(--wb-vc-active-bg))]"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
          </div>
        </div>
        <template #content>
          <div>
            <div w="full" flex items="center" gap="2">
              <div w="20">text</div>
              <div flex="1">--wb-vc-text-normal</div>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-text-normal))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">text:active</div>
              <div flex="1">--wb-vc-text-active</div>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-text-active))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">bg</div>
              <div flex="1">--wb-vc-text-normal</div>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-card))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">bg:hover</div>
              <div flex="1">--wb-vc-text-normal</div>
              <div
                w="4"
                h="4"
                bg="[rgb(var(--wb-vc-active-bg))]"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
        </template>
      </wb-popup>
    </div>
  </div>
</template>
